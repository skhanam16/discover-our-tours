import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';


export const pageLinks = [
    {id: 1, href: '#home', text: 'Home' },
    {id: 2, href: '#about', text: 'About' },
    {id: 3, href: '#services', text: 'Services' },
    {id: 4, href: '#tours', text: 'Tour' }

];


export const socialLinks = [
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
    {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },

];

export const services = [
    {id: 1, serviceTitle: 'saving money', 
        serviceText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', 
        icon: 'fas fa-wallet fa-fw'},
    {id: 2, serviceTitle: 'endless hiking', 
        serviceText: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', 
        icon: 'fas fa-tree fa-fw'},
    {id: 3, serviceTitle: 'amazing comfort', 
        serviceText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.', 
        icon: 'fas fa-socks fa-fw'},
];


export const tours = [
    {id:1, 
        image: tour1, 
        date: 'august 26th, 2020', 
        title: 'Tibet Adventure', 
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' ,
        location: 'china',
        duration: '6 days',
        cost: 'from $2100'
       },
    
          {id:2, 
        image: tour2, 
        date: 'october 1th, 2020', 
        title: 'best of java', 
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' ,
        location: 'indonesia',
        duration: '11 days',
        cost: 'from $1400'
       },
          {id:3, 
        image: tour3, 
        date: 'august 26th, 2020', 
        title: 'Tibet Adventure', 
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' ,
        location: 'china',
        duration: '6 days',
        cost: 'from $2100'
       },
    
          {id:4, 
        image: tour4, 
        date: 'september 15th, 2020', 
        title: 'explore hong kong', 
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' ,
        location: ' hong kong',
        duration: '8 days',
        cost: 'from $5000'
       },
           {id:5, 
        image: tour5, 
        date: 'september 15th, 2020', 
        title: 'explore hong kong', 
        info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' ,
        location: ' hong kong',
        duration: '8 days',
        cost: 'from $5000'
       }
];