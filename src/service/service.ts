import request from '@/service/request';

//
export async function getPeopleList() {
  return request('./people.json', {
    method: 'GET',
  });
}

//news
export async function getNewsList() {
  return request('./news.json', {
    method: 'GET',
  });
}


//research
export async function getReasearchList() {
  return request('./research.json', {
    method: 'GET',
  });
}


//publication
export async function getPublicationList() {
  return request('./publication.json', {
    method: 'GET',
  });
}

//Activities
export async function getActivitiesList() {
  return request('./activities.json', {
    method: 'GET',
  });
}

//seminar
export async function getSeminarList() {
  return request('./seminar.json', {
    method: 'GET',
  });
}

//teaching.json
export async function getTeachingList() {
  return request('./teaching.json', {
    method: 'GET',
  });
}


//Service.json
export async function getServiceList() {
  return request('./services.json', {
    method: 'GET',
  });
}
export async function getServiceList2() {
  return request('./services2.json', {
    method: 'GET',
  });
}
