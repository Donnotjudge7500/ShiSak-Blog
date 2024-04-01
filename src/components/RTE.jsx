import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';



export default function RTE({ name, control, label, defaultValue = 'Welcome to the editor!' }) {
    return (
        <div className='w-full'>
            { label && <label className='inline-block mb-1 pl-1 font-semibold text-2xl underline'>
                { label }
            </label> }

            <Controller
                name={ name || 'content' }
                control={ control }
                render={ ({ field: { onChange } }) => (
                    <Editor
                        apiKey='4uulhnzg7htuhhf7jj8f9u3mf8nokjpn3ijzd6kmjz1io9ma'
                        initialValue={ defaultValue }
                        init={ {
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar: 'undo redo | blocks | image | bold italic underline forecolor | alignleft aligncenter fullscreen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformate | help',

                        } }
                        onEditorChange={ onChange }
                    />
                ) }
            />
        </div>
    )
}

