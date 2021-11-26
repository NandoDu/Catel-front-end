import apiCon, {HttpMethod} from '../apiCon';

interface PublishCommentI {
  userId: number;
  orderId: number;
  score: number;
  title: string;
  content: string;
}

const publishCommentAPI = apiCon<PublishCommentI>(HttpMethod.Post, '/comment/');

export {
  PublishCommentI,
  publishCommentAPI,
};
