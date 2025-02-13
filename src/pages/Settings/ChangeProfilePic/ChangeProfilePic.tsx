import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ChangeProfilePic } from "@/redux/slices/UserSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfilePic = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const formik = useFormik<{ photo: File | null }>({
    initialValues: {
      photo: null,
    },
    validationSchema: Yup.object({
      photo: Yup.mixed<File>()
        .required("A file is required")
        .test("fileType", "Only images are allowed", (value) =>
          value ? ["image/jpeg", "image/png", "image/webp"].includes(value.type) : false
        ),
    }),
    onSubmit: async (values) => {
      if (!values.photo) return; 
      setLoading(true);
      try {
        const formData:FormData = new FormData();
        formData.append("photo", values.photo);
        const response = await dispatch(ChangeProfilePic(formData) as any).unwrap();
        toast.success("Profile picture uploaded successfully ", { duration: 2000 });
        setTimeout(()=>{
          navigate('/profile');
        },3000)
        
        return response;
      } catch (error) {
        toast.error(`Upload failed : ${error} `, { duration: 2000 });

      } finally {
        setLoading(false);
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      formik.setFieldValue("photo", file);
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center mx-auto md:h-screen p-2">
      <h2 className='text-2xl font-bold mb-10  md:mb-20 p-2 text-center text-gray-800  '>Change Profile Picture</h2>
        {selectedFile && (
          <img src={selectedFile} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover border" />
        )}
        <form className='w-full flex flex-col gap-2 max-w-sm mx-auto bg-white p-8 rounded-xl shadow-2xl' onSubmit={formik.handleSubmit}>
          <input
            type="file"
            name="photo"
            className="file:px-3 file:py-1 file:rounded-xl file:border-none file:bg-black file:text-white file:cursor-pointer text-sm"
            accept="image/*"
            onChange={handleFileChange}
          />
          {formik.touched.photo && formik.errors.photo && <p className="text-red-500 text-sm">{formik.errors.photo}</p>}
          <button
            type="submit"
            className="w-full flex text-white rounded-xl p-2 bg-black items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Upload"}
          </button>
        </form>
    </div>
  );
};

export default ProfilePic;
