export interface AuthorFields {
    firstName: { 'en-US': string };
    lastName: { 'en-US': string };
    position: { 'en-US': string };
    image: {
      'en-US': {
        sys: {
          type: 'Link';
          linkType: 'Asset';
          id: string;
        };
      };
    };
    quotes: { 'en-US': string }
  }
  
  export interface AuthorEntry {
    fields: AuthorFields;
  }
  