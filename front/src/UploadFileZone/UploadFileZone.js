import React, { useEffect, useState } from "react"
import FileContainer from "../FileContainer/FileContainer"
import "./style.css"

const UploadFileZone = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => { console.log(files, loading) }, [files, loading])

    const handleFileChange = (e) => {
        const targetFiles = [...e.target.files]

        if (targetFiles.length <= 5) {
            setFiles(targetFiles)
        } else {
            alert("5 files max")
        }

        return (true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (files.length >= 1) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setFiles([])
            }, 3000)
        }
    }

    const handleRemove = (name) => {
        setFiles(files.filter(e => e.name !== name))
    }

    return (
        <div>
            {
                loading ?
                    <div className="loader"></div>
                    :
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                onChange={handleFileChange}
                                type="file"
                                value=""
                                multiple
                                disabled={loading}
                            />
                        </div>
                        <div>
                            {
                                files != null &&
                                files.map(e => (<FileContainer handleRemove={handleRemove} name={e.name} key={`id${e.name}`} />))
                            }
                        </div>
                        <input disabled={loading} type="submit" value="Submit Files"></input>
                    </form>
            }


        </div>

    )
}

export default UploadFileZone;