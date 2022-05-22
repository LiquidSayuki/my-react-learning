import React from 'react';
import { Upload, message,Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from "axios";

const { Dragger } = Upload;

export default class DragInPicture extends React.Component{
    state = {
        fileList: [],
        uploading: false,
    };

    handleUpload = () => {
        let base64image = "";
        const { fileList } = this.state;
        const formData = new FormData();
        const reader = new FileReader();
        fileList.forEach(file => {
            formData.append('files[]', file);
            reader.readAsDataURL(file);
        });

        this.setState({
            uploading: true,
        });

        const promise = new Promise(function (resolve, reject) {
            reader.onload = function (e) {
                base64image = e.target.result.split("base64,")[1];
                console.log("read finish");
                resolve();
            }
        }).then(() => {
            console.log("start post");
            axios.post("https://7rdolkd2q3.execute-api.us-east-1.amazonaws.com/dev/",
                {"id":"hello",
                    "image":base64image,
                }).then(res=>{
                console.log(res)
                this.props.success(res);
            }).then(()=>{
                this.setState({
                    fileList: []
                });
                message.success("upload successfully.")
            }).catch(()=>{
                message.error("upload failed.")
            }).finally(()=>{
                this.setState({
                    uploading: false,
                });

            })
        })

        // You can use any AJAX library you like
        // fetch('/dev/', {
        //     method: 'POST',
        //     body: {"image":base64image,"id":"hello"}
        // })
        //     .then(res => res.json())
        //     .then(() => {
        //         this.setState({
        //             fileList: [],
        //         });
        //         message.success('upload successfully.');
        //     })
        //     .catch(() => {
        //         message.error('upload failed.');
        //     })
        //     .finally(() => {
        //         this.setState({
        //             uploading: false,
        //         });
        //     });
    };

    render() {
        const {uploading, fileList} = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [file],
                    // This is for multiple pictures
                    // fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };

        return (
            <div>
                <Dragger
                    {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Only accept .png/.jpg files
                    </p>
                </Dragger>

                <Button
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{marginTop: 16}}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button>
            </div>
        );
    }
}
