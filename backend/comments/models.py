from django.db import models

class Comments(models.Model):
    comment = models.CharField(max_length=200)
    newsId = models.CharField(max_length =200,null=True)
    def __str__(self):
        return self.newsId
    