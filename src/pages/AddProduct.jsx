import React, { useState }  from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// image start
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

// image end
const AddProduct = () => {
    const [desc, setDesc] = useState();
  
  const handleDesc = (e) => {
    setDesc(e);
  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
      </div>)
  return (
    <div>
      <h3 className='mb-4 title'>Add Product</h3>
      <div>
        <form action="">
        <div className='mb-3'>
        <ReactQuill
            theme="snow"
            value={desc}
            onChange={handleDesc}
          />
        </div>
            <CustomInput type="text" label="Enter Product Title"/>
            <CustomInput type="number" label="Enter Product Price"/>
            <select name="" className='form-control py-3 mb-3' id="">
                <option value="">Select Brand</option>
            </select>
            <select name="" className='form-control py-3 mb-3' id="">
                <option value="">Select Category </option>
            </select>
            <select name="" className='form-control py-3 mb-3' id="">
                <option value="">Select Color</option>
            </select>
           < CustomInput type="number" label="Enter Product Price"/>
           <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
