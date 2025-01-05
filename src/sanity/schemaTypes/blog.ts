


     const Habib= {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        
        
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows for better cropping in the Sanity Studio
        },
        
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
        {type:'block'}, // For rich text editing
          { type: 'image' }, // Allows images in the content body

        ],
      },
      
    
    ],
  
  };
   export default Habib;

  