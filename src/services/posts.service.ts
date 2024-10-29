import {IRes} from "@/types/response.type";
import {IPost} from "@/types/post.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/constants/urls";

const postsService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts),
    getById: (id: number | string): IRes<IPost> => apiService.get(urls.postById(id))
};

export {postsService};