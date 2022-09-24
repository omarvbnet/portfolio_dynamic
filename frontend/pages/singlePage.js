import { useRouter } from 'next/router'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Divider from '@mui/material/Divider';

import axios from 'axios';
export default function newsDetialsSinglePage() {
  const router = useRouter()
  const  item = router.query;
  const [comment, setComment] = useState(null);
  const [comments, setComments] = useState(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
         
          const formData = new FormData();
          formData.append('newsId', item.id);
          const config = {
            headers: {
                'Accept': 'application/json',
            }
        };

          try {
              const res = await axios.get('http://localhost:3000/api/1',formData );
             
              if (res.status === 200) {
                  setComments(res.data);
                 
              }
          } catch(err) {

          }
      };

      fetchData();
  }, [updated]);

  const onTextChange = e => setComment(e.target.value);

  const onSubmit = async e => {
      e.preventDefault();
      
     

      const formData = new FormData();
      formData.append('newsId', item.id.toString());
      formData.append('comment', comment);
      comments.push(comment)
      const body = formData;

      try {
          const res = await axios.post('http://localhost:8000/comments/post', body);
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Credentials", "true");
          res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
          res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
          
          if (res.status === 201) {
              setUpdated(true);
          }
      } catch(err) {

      }
      location.reload();
  };
  console.log(item);
  return (
    <div direction='right' dir='rtl' style={{ 
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:40,
      paddingBottom:40,
      paddingLeft:40,
      paddingRight:40,
      display: 'flex'
     }}>
      <Card  sx={{ }}>
      <CardMedia
        component="img"
        image={item.image}
       
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.des}
        </Typography>
      </CardContent>
      <CardActions>
    <form onSubmit={onSubmit}>
    <TextareaAutosize
      aria-label="تعليق"
      placeholder="اكتب تعليق "
      type = 'text'
      name = 'comment'
      value ={comment}
      onChange={onTextChange}
      required
      style={{ width: 200 }}
    />
        <Button type='submit' size="small">نشر</Button>
    </form>
      </CardActions>
      {
         comments !== null && comments !== undefined && comments.length > 0 && comments.map(data => (
          <div style={{ 
            padding: 10,
          }} key={data.id}>
            
            
             <div style={{ 
            paddingRight: 10,
            paddingLeft:10,
            placeItems:'center',
            display:'flex'
          }}>
             <Avatar sx={{ bgcolor: deepPurple[400] }}>A</Avatar>
              <div style ={{ 
                padding:10,
               }}>
              <h5>{data.comment}</h5>
              </div>
             </div>
             <Divider />
          </div>
      ))
      }
    </Card>
    </div>
  );
}