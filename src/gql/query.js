import {gql} from '@apollo/client';

export const GET_NEWS = gql`
   query MyQuery {
  queryNews(first:3) {
    description
    id
    image_src
    resource_link
    title
  }
}
`;

export const GET_NEWS1 = gql`
   query QueryNews($offset: Int, $first: Int) {
  queryNews(offset: $offset, first: $first) {
    description
    id
    image_src
    resource_link
    title
  }
}
`;

export const GET_ABOUT_SHORT = gql`
   query MyQuery {
    queryAboutMe {
        id
        title_short
    }
}
`;

export const GET_ABOUT_PATH = gql`
   query MyQuery {
    queryAboutMe {
        id
        path1
        path2
        path3
        path4
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
    mutation AddCallback($date: String, $time: String, $phone_number: String, $description: String) {
    addCallback(input: {date: $date, time: $time, phone_number: $phone_number, description: $description}) {
        numUids
        callback {
            id
        }
    }
}
`;




