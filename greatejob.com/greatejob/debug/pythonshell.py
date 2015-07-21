stan@stan-VirtualBox:~$ scrapy shell http://www.indeed.com/jobs?q=ios+developer
jobs = response.css('.row.result')
for job in jobs:
    title = job.css('h2.jobtitle a b').extract()
    link = job.xpath('h2/a/@href').extract()
    company = job.css('.company span::text').extract()
    location = job.css('span.location span::text').extract()
    description = job.css('span.summary::text').extract()
    print title


stan@stan-VirtualBox:~$ scrapy shell http://www.indeed.com/jobs?q=ios+developer
jobs = response.css('.row.result')
import httplib
from scrapy.http import HtmlResponse
for job in jobs:
    links = job.xpath('h2/a/@href').extract()
    for link in links:
    coon = httplib.HTTPConnection("www.indeed.com")
    coon.request("GET", link)
    r1 = coon.getresponse()
    data = r1.read()
    reahtml= HtmlResponse(data)
    realink = reahtml.xpath('text()').extract()
    print realink



for job in jobs:
    links = job.xpath('h2/a/@href').extract()
    for link in links:




def parse_page2(self, response):
    # this would log http://www.example.com/some_page.html
    self.log("Visited %s" % response.xpath('a/@href').extract)




import spynner
import pyquery
import time
import BeautifulSoup
for job in jobs:
   ....:     links = job.xpath('h2/a/@href').extract()
   ....:     for link in links:
   ....:         rlink = "www.indeed.com" + link
   ....:         browser = spynner.Browser()
   ....:         browser.create_webview()
   ....:         browser.set_html_parser(pyquery.PyQuery)
   ....:         browser.load(rlink, 20)
   ....:         try:
   ....:             browser.wait_load(10)
   ....:         except:
   ....:             pss
   ....:         string = browser.html
   ....:         browser.close()
   ....:         soup = BeautifulSoup.BeautifulSoup(string)
    ...:         time.sleep(2)
   ....:         for tlink in soup.find_all('a'):
   ....:             print(tlink.get('href'))

//////////////////////////////okkkkkk look
for job in jobs:
    links = job.xpath('h2/a/@href').extract()
    for link in links:
        rlink = "www.indeed.com" + link
        print rlink
        browser = spynner.Browser()
        browser.create_webview()
        browser.set_html_parser(pyquery.PyQuery)
        browser.load(rlink, 20)
        try:
            browser.wait_load(10)
        except:
            pass
        string = browser.html
        print string
        sout = BeautifulSoup(string)
        time.sleep(2)



#ecoding: utf-8











The document has moved
<A HREF="http://hire.jobvite.com/CompanyJobs/Job.aspx?c=q2h9Vfw7&j=oC7c1fwG&s=Indeed">here</A>.
</BODY></HTML>
>
<200 <HTML><HEAD><TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://todaytix.theresumator.com/apply/job_20150617210943_42LAIIXC5CBGSCFM/IOS-Developer?source=INDE">here</A>.
</BODY></HTML>
>
<200 <HTML><HEAD><TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://rodaleinc-openhire.silkroad.com/epostings/submit.cfm?fuseaction=app.dspjob&jobid=839&company_id=16663&version=1&jobBoardId=1112">here</A>.
</BODY></HTML>
>
<200 <HTML><HEAD><TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://www.gigwalk.com/jobDescriptions/senioriOSDeveloper.html">here</A>.
</BODY></HTML>
>
<200 <HTML><HEAD><TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://us.conv.indeed.com/rc/clk?jk=934c3a2212c526a2&ctk=19o35os6vbqakfsg&t=cr&rctype=oth&orgclktk=19o35os72bqakdch&wwwho=YX4g3jyoJYNxX6RqBdiHgsV0kTtduSRI">here</A>.
</BODY></HTML>
>
