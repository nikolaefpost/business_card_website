import {gql} from '@apollo/client';

export const GET_NEWS = gql`
   query MyQuery {
  queryNews {
    description
    id
    image_src
    resource_link
    title
  }
}
`;

export const ADD_NEWS = gql`
    mutation AddNews($description: String!, $resource_link: String!, $image_src: String!, $title: String!) {
    addNews(input: {
    description: $description,
     resource_link: $resource_link,
      image_src: $image_src,
       title: $title}) {
        numUids
        news {
            title
        }
    }
}
`;


