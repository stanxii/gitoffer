from scrapy.selector import Selector
try:
    from scrapy.spider import Spider
except:
    from scrapy.spider import BaseSpider as Spider
from scrapy.utils.response import get_base_url
from scrapy.utils.url import urljoin_rfc
from scrapy.contrib.spiders import CrawlSpider, Rule
from scrapy.contrib.linkextractors.sgml import SgmlLinkExtractor as sle

from greatejob.items import *
from greatejob.misc.log import *

class IndeedSpider(CrawlSpider):
    name = "indeed"
    allowed_domains = ["indeed.com"]
    start_urls = [
        "http://www.indeed.com/jobs?q=ios+developer"
    ]
    rules = [
        Rule(sle(allow=("/jobs\?q=ios+developer&start=\d{.4}")), follow=True, callback='parse_item')
    ]

    def parse_item(self, response):
        items = []
        sel = Selector(response)
        base_url = get_base_url(response)
        sites_even = sel.css('.row')
        for site in sites_even:
            item = IndeedItem()
            item['title'] = site.css('.jobtitle a').xpath('text()').extract()[0]

            #relative_url = site.css('.l.square a').xpath('@href').extract()[0]
            items.append(item)
            #print repr(item).decode("unicode-escape") + '\n'


        info('parsed ' + str(response))
        return items


    def _process_request(self, request):
        info('process ' + str(request))
        return request

