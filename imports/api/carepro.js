import { Mongo } from 'meteor/mongo';

const exampleCarePro = {
    "email_address" : "jane@email.com",
    "first_name" : "Jane",
    "last_name" : "Doe",
    "phone_number" : "+6596273428",
    "status" : "Approved-Pending Docs",
    "created_at" : Date.parse("2016-12-22T04:37:00.775+0000"),
    "updated_at" : Date.parse("2016-12-22T04:37:00.776+0000"),
    "personal_information" : {
        "gender" : "Female",
        "nationality" : "Singapore Citizen",
        "NRIC_Number" : "S9319000A",
        "race" : "Indian",
        "religion" : "Other",
        "date_of_birth" : Date.parse("1993-04-04T00:00:00.000+0000"),
        "height" : 178,
        "weight" : 92,
        "own_smart_phone" : "Yes",
        "fluent_languages" : [
            "English"
        ],
        "medical_conditions" : "No",
        "medication" : "No",
        "city" : "Singapore"
    },
    "skills_qualifications" : {
        "caregiving_training_education" : [
            "NITEC in Nursing"
        ],
        "experience_conditions_devices" : [
            "Stroke",
            "Dementia"
        ],
        "experience_brief_summary" : "I have some experience dealing with patients with dementia during my internship at Singapore general Hospital. I also served several patients with stroke during that time.",
        "num_years_caregiving_experience" : "Less than 1 year",
        "task_level_experience" : {
            "medication" : [
                "Medication Reminders"
            ],
            "staying_active" : [
                "Simple Exercises",
                "Manual Transfers",
                "Familiar with wheelchair functions"
            ],
            "grocery_shopping" : [
                "General Grocery Shopping",
                "Packed Meals"
            ],
            "transport_assistance" : [
                "Familiar with walking aids",
                "Familiar with wheelchair functions"
            ],
            "housekeeping" : [
                "Bed making",
                "Laundry",
                "Floor Vacuuming",
                "Room cleaning",
                "Floor sweeping",
                "Floor Mopping"
            ],
            "personal_care_hygiene" : [
                "Bed Bath",
                "Change Diapers",
                "Showering",
                "Manual Transfers"
            ],
            "checkin_visits" : [
                "Brief Check-ins"
            ],
            "night_caregiving" : [
                "Night Caregiving"
            ]
        },
        "task_level_willingness" : {
            "medication" : [
                "Medication Reminders"
            ],
            "staying_active" : [
                "Simple Exercises",
                "Manual Transfers",
                "Familiar with wheelchair functions"
            ],
            "grocery_shopping" : [
                "General Grocery Shopping",
                "Packed Meals"
            ],
            "transport_assistance" : [
                "Familiar with walking aids",
                "Familiar with wheelchair functions"
            ],
            "housekeeping" : [
                "Bed making",
                "Laundry",
                "Floor Vacuuming",
                "Room cleaning",
                "Floor sweeping",
                "Floor Mopping"
            ],
            "personal_care_hygiene" : [
                "Bed Bath",
                "Change Diapers",
                "Showering",
                "Manual Transfers"
            ],
            "checkin_visits" : [
                "Brief Check-ins"
            ],
            "night_caregiving" : [
                "Night Caregiving"
            ]
        }
    },
    "invite_code" : "INVITE",
    "only_vwo_suitable" : "No"
};
const CarePro = new Mongo.Collection('carepro');
export { exampleCarePro, CarePro };
