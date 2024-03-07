import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classObj1 = new ClassRoom(19);
  const classObj2 = new ClassRoom(20);
  const classObj3 = new ClassRoom(34);

  const classObj = [classObj1, classObj2, classObj3];

  return classObj;
}
