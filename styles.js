import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', 
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40, 
    textAlign: 'center',
    backgroundColor: '#4A90E2', 
    color: '#fff', 
    padding: 15,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black', 
    padding: 10,
    borderRadius: 10, 
    marginBottom: 10,
    width: '90%', 
    alignSelf: 'center', 
  },
  addButton: {
    padding: 15,
    borderRadius: 15, 
    alignItems: 'center',
    marginVertical: 10,
    width: '80%', 
    alignSelf: 'center', 
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6,
    elevation: 6, 
  },
  taskDetails: {
    flexDirection: 'column', 
  },
  taskActions: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  taskTitle: {
    fontSize: 16,
  },
  taskStatus: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5, 
  },
  deleteButton: {
    color: 'red',
    fontSize: 18,
  },
});

export default styles;
