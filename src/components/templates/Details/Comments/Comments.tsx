import * as Style from "./index.styled";
import Button from "@/components/common/Button/Button";
import { ST } from "next/dist/shared/lib/utils";
import React, {useEffect, useState} from "react";


export default function Comments(props: {PersonKey: number}){

    const [comments, setComments] = useState<CommentData[]>([])
    const [newComment, setNewComment] = useState<string>("")
    const [isSend, setIsSend] = useState<boolean>(true)


    const commentsStorageKey = "comments-" + String(props.PersonKey)
    useEffect(() => {
        if (isSend){
            const storageComments = localStorage.getItem(commentsStorageKey)
            if (storageComments == null) {
                setComments([])
            }
            else {
                setComments(JSON.parse(storageComments))
            }
            setIsSend(false)
        }
    }, [isSend, props.PersonKey])

    const onCommentDelete = (id: string) => {
        const newComments: CommentData[] = comments.filter(com => com.name !== id)
        localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
        // clear input field
        setNewComment("")
        // set flag to load comments from localstorage
        setIsSend(true)
        // setComments(newComments)
    }

    const onCommentSend = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (newComment.length > 0) {
            const newComments: CommentData[] = comments
            newComments.push({
                name: `anonym ${comments.length + 1}`,
                text: newComment
            })
            localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
            // clear input field
            setNewComment("")
            // set flag to load comments from localstorage
            setIsSend(true)
            // setComments(newComments)
        }
        

    }

    return (
        <Style.Comments>
            
            {comments.length >0 ? (comments.map(c => (
                <Comment
                    key={c.name} {...c}
                    deleteHandler={onCommentDelete}
                />

            ))) : (<Style.NoComment>
                <Style.Img src="/bird.png" alt='webDev'></Style.Img>
                    <Style.Title>You can be the first!</Style.Title></Style.NoComment>
                ) }
            <Style.Form onSubmit={onCommentSend}>
                <Style.Input
                    placeholder={'Write your comment'}
                    value={newComment}
                    onChange={(current) => setNewComment(current.target.value)}
                >

                </Style.Input>
                <Button
                    type="submit"
                    name='Send'
                    action={()=>console.log('create comment')}
                   
                />
            </Style.Form>
        </Style.Comments>
    )
}

interface CommentData {
    name: string,
    text: string,
}

interface CommentProps extends CommentData{
    deleteHandler: (id: string) => void
}

const Comment = (props: CommentProps)=> {
    return (
        <Style.Comment>
             <Style.User>
                <Style.MainImg src="/user.png"></Style.MainImg>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.User>
            
            <Style.Text>
                {props.text}
            </Style.Text>
           <Style.DeleteButton
                onClick={() => props.deleteHandler(props.name)}
            >
                delete
            </Style.DeleteButton>

        </Style.Comment>
    )
}