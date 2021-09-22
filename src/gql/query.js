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

export const ADD_CALLBACK = gql`
    mutation AddCallback($date: String, $time: String, $phone_number: Int!, $description: String) {
    addCallback(input: {date: $date, time: $time, phone_number: $phone_number, description: $description}) {
        numUids
        callback {
            id
        }
    }
}
`;

