# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field


class IndeedItem(Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = Field()
    catalog = Field()
    company = Field()
    location = Field()
    description = Field()
    publishTime = Field()
    salary = Field() 
    rating = Field()
    jobtype = Field()
    recruiterNumber = Field()
    pass

