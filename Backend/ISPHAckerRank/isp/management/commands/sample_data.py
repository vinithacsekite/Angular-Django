# isp/management/commands/add_sample_data.py

from django.core.management.base import BaseCommand
from isp.models import ISP

class Command(BaseCommand):
    help = 'Adds sample data to the ISP model'

    def handle(self, *args, **kwargs):
        ISPs = [
            {
                'name': 'Sample ISP 1',
                'lowest_price': 30.00,
                'rating': 4.5,
                'max_speed': 100,
                'description': 'Sample description for ISP 1',
                'contact_no': '1234567890',
                'email': 'sample1@example.com',
                'image': 'https://example.com/image1.png',
                'url': 'https://sampleisp1.com',
            },
            {
                'name': 'Sample ISP 2',
                'lowest_price': 40.00,
                'rating': 4.2,
                'max_speed': 200,
                'description': 'Sample description for ISP 2',
                'contact_no': '9876543210',
                'email': 'sample2@example.com',
                'image': 'https://example.com/image2.png',
                'url': 'https://sampleisp2.com',
            },
            # Add more sample data as needed
        ]

        for isp_data in ISPs:
            ISP.objects.create(**isp_data)

        self.stdout.write(self.style.SUCCESS('Sample data added successfully'))
