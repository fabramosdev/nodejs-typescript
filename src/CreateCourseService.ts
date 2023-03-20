interface ICourse {
    name: string;
    duration: number;
    educator: string;
}
class CreateCourseService {
    execute({ duration, educator, name }: ICourse) {
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService()