From my experience it can be good to define a layout component for your page, something like...

Layout Component

render() {
    return(
       <div>
          <Header />
             { this.props.children }
             /* anything else you want to appear on every page that uses this layout */
          <Footer />
       </div>
    );
}
You then import layout into each of your page components...

Contact Page Component

render() {
    return (
        <Layout>
           <ContactComponent />
           /* put all you want on this page within the layout component */
        </Layout>
    );
}
And you can leave your routing the same, your route will render the contact page and in turn will render your header.

This way you get control of repetitive stuff that will be on multiple pages, if you need one or two slightly different pages you can just create another layout and use that.