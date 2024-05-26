export type ActivityHourType = {
  date: string
  exams_completed: number
  hours: number
  lessons_taken: number
}

export type CourseType = {
  assigned_to: string
  description: string
  due_date: string
  status: string
  title: string
}

export type SkillType = {
  employees: number
  skill: string
}

export type EmployeeType = {
  current_score: number
  email: string
  lessons_taken: number
  name: string
  skills_being_developed: string[]
  title: string
}

export type TeamType = {
  description: string
  employees: EmployeeType[]
  overall_score: number
  title: string
  total_employee_count: number
}

export type TopEmployeeType = Omit<EmployeeType, 'lessons_taken' | 'skills_being_developed'>

export type ApiResponse = {
  data: {
    activity_hours: ActivityHourType[]
    average_employee_score: number
    in_progress_courses: CourseType[]
    skills_in_development: SkillType[]
    teams: TeamType[]
    top_employees: TopEmployeeType[]
    top_skills: SkillType[]
    total_completed_courses: number
    total_employees: number
    upcoming_courses: CourseType[]
  }
}

type ReplaceProperty<T, K extends keyof T, NewType> = Omit<T, K> & {[P in K]: NewType}

export type EmployeesWithIdNPhotoType = {
  id: string
  photo: string
} & EmployeeType

export type TeamsWithIdType = {
  id: string
} & ReplaceProperty<TeamType, 'employees', EmployeesWithIdNPhotoType[]>

/*export type FieldErrorType = { field: string; error: string }*/
