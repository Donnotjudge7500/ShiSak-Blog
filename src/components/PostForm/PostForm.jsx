import React, { useEffect, useCallback, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { RTE, Input, Button, Select } from '../Index.js';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import configurationService from '../../appwrite/configuration.js';


function PostForm({ post }) {
    const [uploading, setUploading] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.authenticationSlice.userData);

    const { watch, handleSubmit, register, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    });
    
    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? configurationService.uploadFile(data.image[0]) : null;

            if (file) {
                configurationService.deleteFile(post.featuredImage);
            }
            const databasePost = await configurationService.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined });
            if (databasePost) {
                navigate(`/post/${databasePost.$id}`);
            }
        } else {
            const file = configurationService.uploadFile(data.image[0]);
            setUploading(true);
            if (file) {
                const fileId = (await file).$id;
                data.featuredImage = fileId;
                const databasePost = await configurationService.createPost({
                    ...data,
                    UserId: userData.$id,
                });
                if (databasePost) {
                    navigate(`/post/${databasePost.$id}`);
                };
                setUploading(false);
            };
        };
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof (value) === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }
        return '';
    }, []);

    const buttonLabel = (uplaod) => {
        if (post) {
            if (uplaod) {
                return "Updating..";
            }
            else {
                return "Update";
            }
        }
        else {
            if (uplaod) {
                return "Uploading..";
            }
            else {
                return "Submit";
            }
        }
    }

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue("slug", slugTransform(value.title),
                    { shouldValidate: true });
            }
        });
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue]);
    return (
        <form onSubmit={ handleSubmit(submit) } className='flex flex-wrap mt-10'>
            <div className='w-2/3 mb-20 px-2 flex text-2xl flex-col gap-3 overflow-hidden'>
                <Input
                    label='Title:'
                    placeholder='Title'
                    className='mb-4 font-bold w-60 p-1 bg-zinc-300 rounded-lg'
                    { ...register("title", { required: true }) }
                />
                <Input
                    label='Slug:'
                    placeholder='Slug'
                    value={ post ? slug : '' }
                    readOnly='readOnly'
                    className='mb-4 w-60 bg-zinc-300 rounded-lg p-1'
                    { ...register('slug', { required: true }) }
                    onInput={ (e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    } }
                />
                <RTE label="Content :" name="content" control={ control } defaultValue={ getValues("content") } />
            </div>
            <div className='w-1/3 p-3 flex flex-col gap-3 border-4 shadow-xl h-fit rounded-xl'>
                <Input
                    label='Featured Image:'
                    type='file'
                    className='mb-4'
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    { ...register("image", { required: !post }) }
                />
                { post && (
                    <div className='w-full mb-4'>
                        <img src={ configurationService.getFilePreview(post.featuredImage) } alt={ post.title } className='rounded-lg' />
                    </div>
                ) }
                <Select
                    options={ ["active", "inactive"] }
                    label="Status: "
                    className="mb-4"
                    { ...register('status', { required: true }) }
                />
                <Button
                    type='submit'
                    bgColor={ post ? "bg-green-500" : undefined }
                    className='w-full text-lg font-semibold active:scale-95 transition duration-500 py-2 rounded-lg'>
                    {/* { post ? "Update" : "Submit" } */ }
                    
                    {buttonLabel(uploading)}
                </Button>
            </div>
        </form>
    )
}

export default PostForm