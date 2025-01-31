import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { AppDispatch } from '@/redux/Store';
import { useDispatch } from 'react-redux';
import { createPostResponse } from '@/interfaces/createPost';
import { AddPost } from '@/redux/slices/PostsSlice';
import toast from 'react-hot-toast';


function CreatePost() {

    const dispatch : AppDispatch = useDispatch();

    const validationSchema = yup.object({
        body: yup
        .string()
        .min(1)
        .max(301,"The body has exceeded the character limit" ),
        image: yup
        .mixed()
        .nullable()
        .test('fileType',"Only JPEG and JPG images are allowed", (value) => {
            if (!value ) return true 
            return (
                (value as File).type === "image/jpeg" || (value as File).type === "image/jpg"
            );
            })
        .test('fileSize',"The file is too large", (value) => {
            if (!value ) return true 
            return (value as File).size <= 2* 1024 * 1024
        })
        // .test('At least one field should be filled', function (value) {
        //     const typedValue = value as { body: string; image: File };
        //     const bodyValid = typedValue.body && typedValue.body.trim() !== '';
        //     const imageValid = typedValue.image !== null;
            
        //     return bodyValid || imageValid;
        // })
    })

const formik = useFormik({
    initialValues: {
        body: "",  
        image: null
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {  



        try {
        const response: createPostResponse = await dispatch(AddPost(values)).unwrap();
        if (response.message === "success") {
            toast.success("Your Thought has reached everyone!🤩", { duration: 2000 });
            formik.resetForm();
            console.log(response, "Api response:");
            // Here we are supposed to dispatch the loggedUserPosts function to update the newsfeed real time

        }
        } catch (error) {
        console.log("Error while submitting form:", error);
        }
    },
    });
    console.log("Formik errors:", formik.errors); 



    return (
        <>
        <form className="my-10" onSubmit={formik.handleSubmit}> 
        <textarea
            name="body"
            className="w-full h-40 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            onChange={formik.handleChange}
            value={formik.values.body}
        />
        
        <input
            type="file"
            name="image"
            onChange={(e) => {
            const file = e.target.files?.[0] || null;
            formik.setFieldValue("image", file);
            }}
        />

        <button
            type="submit"
            className="bg-blue-500 text-white my-4 px-4 py-2 rounded-2xl text-lg"
        >
            Post
        </button>
        </form>

        {formik.touched.image && formik.errors.image && (
    <div className="text-red-500 text-sm">{formik.errors.image}</div>
  )}

        {/* <div className="post my-5">
            {formik.values.body && (
            <div>
                <h2>{formik.values.body}</h2>
            </div>
            )}
        </div> */}
        </>
    )
}

export default CreatePost;

