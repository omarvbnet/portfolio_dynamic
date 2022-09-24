from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Comments
from .serializers import CommentsSerializer

class getComments(APIView):
      def get(self, request):
        if Comments.objects.all().exists():
            data = request.data
           
            comments = Comments.objects.raw('SELECT * FROM comments_comments WHERE "newsId" = %s LIMIT 5', ['1'] )
            comments = CommentsSerializer( comments, many=True)
            return Response(
                {'comments': comments.data},
               
                status=status.HTTP_200_OK
            )

        else:
            return Response(
                {'error': 'No comments found'},
                status=status.HTTP_404_NOT_FOUND
            )

class PostComment(APIView):
    def post(self, request):
        try:
            data = self.request.data
            comment = data['comment']
            newsIdString = data['newsId']
           
            Comments.objects.create(
                newsId=newsIdString,
                comment=comment,
            )

            return Response(
                {'success': 'Successfully uploaded comment'},
                status=status.HTTP_201_CREATED
            )
        except:
            return Response(
                {'error': 'Something went wrong when uploading comment'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )