# isp/models.py

from django.db import models

class ISP(models.Model):
    name = models.CharField(max_length=100)
    lowest_price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.FloatField()
    max_speed = models.PositiveIntegerField()
    description = models.TextField()
    contact_no = models.CharField(max_length=15)
    email = models.EmailField()
    image = models.URLField()
    url = models.URLField()

    def __str__(self):
        return self.name
