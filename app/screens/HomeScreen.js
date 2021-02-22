import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, SectionList } from 'react-native'
import ZoomableImage from '../components/ZoomableImage'
import colors from '../config/colors'

export default function HomeScreen({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [alarmActive, setAlarmActive] = useState(false);
    const [bikes, setBikes] = useState([{"data": ["My bike"]}]);
    const [textToAdd, setTextToAdd] = useState("");

    return (
        <View style={styles.container}>
            <ZoomableImage
                imageWidth={4000}
                imageHeight={8000}
                source={require("../assets/Map2.png")}>
            </ZoomableImage>

        <View style={styles.row}>
            <TouchableOpacity
                style={{...styles.modalButton, width: 40}}
                activeOpacity="0.7"
                onPress={() => {
                    setModalVisible2(true);
                }}
                >
                <Text style={styles.textStyle}>=</Text>
            </TouchableOpacity>

            <View style={{flex: 1}}></View>

            <TouchableOpacity
                style={{...styles.modalButton, width: 40}}
                activeOpacity="0.7"
                onPress={() => {
                    setModalVisible(true);
                }}
                >
                <Text style={styles.textStyle}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1, width: 0}}></View>
            <TouchableOpacity
                style={{...styles.modalButton, width: "80%", marginBottom: 60, borderRadius: 5, backgroundColor: colors.secondary, alignSelf: "center"}}
                activeOpacity="0.7"
                onPress={() => {
                    alarmActive ? setAlarmActive(false) : setModalVisible3(true);
                }}
                >
                <Text style={styles.textStyle}>{alarmActive ? "Turn off alarm" : "Sound alarm" }</Text>
            </TouchableOpacity>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.header}>Scan the QR-code to add a new bike</Text>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.inputAddItem}
                            placeholder="Name"
                            returnKeyLabel="Add"
                            returnKeyType="done"
                            onChangeText={(text) => setTextToAdd(text)}
                        />
                        <TouchableOpacity
                            style={{...styles.modalButton, backgroundColor: colors.primary}}
                            activeOpacity="0.7"
                            onPress={() => {
                                //console.log("Added bike");

                                setBikes([{"data": [...bikes[0].data, textToAdd]}]);
                                //console.log(textToAdd + " - " + String(bikes[0].data));
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>
                    </View>

                    <Image style={{width: "100%", height: "50%", margin: 20,}} source={require("../assets/camera.jpg")}></Image>
                    <Text style={{color: colors.red, marginBottom: 10}}>*This is a dummy camera view (pretend that you point the camera at the lock)</Text>

                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalViewMenu}>
                    <Text style={styles.header}>Menu</Text>
                    <Text>Username: placeholder</Text>
                    <Text style={{...styles.header, marginTop: 20}}>My bikes:</Text>
                    <SectionList
                        //ListHeaderComponent={() => <ListHeader setState={(addItemText) => setState({addItemText})} handlePress={_handlePress} />}
                        sections={bikes}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Text>{item}</Text>}
                        // renderSectionHeader={({ section: { category } }) => (
                        //     <Text style={styles.header}>{category}</Text>
                        // )}
                    />

                    <View style={{...styles.row, marginTop: 20}}>
                        <TouchableOpacity
                            style={{...styles.modalButton, backgroundColor: colors.secondary}}
                            activeOpacity="0.7"
                            onPress={() => {
                                console.log("Cancel");
                                setModalVisible2(!modalVisible2);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{...styles.modalView}}>
                    <Text style={styles.header}>Are you sure you want to activate alarm?</Text>

                    <View style={{...styles.row, marginTop: 20}}>
                        <TouchableOpacity
                            style={{...styles.modalButton, backgroundColor: colors.red}}
                            activeOpacity="0.7"
                            onPress={() => {
                                setModalVisible3(!modalVisible3);
                                setAlarmActive(true);
                            }}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{...styles.modalButton, backgroundColor: colors.primary}}
                            activeOpacity="0.7"
                            onPress={() => {
                                console.log("Cancel");
                                setModalVisible3(!modalVisible3);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        //borderRadius: 20,
        padding: 24,
        elevation: 2,
        marginBottom: 12,
        width: "100%",
        height: 100,
        justifyContent: "center",
    },
    textStyle: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "left",
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        //marginTop: Constants.statusBarHeight,
        //marginHorizontal: 16
    },
    titleBox: {
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        flex: 1,
        fontSize: 40,
        color: colors.text,
    },

    header: {
        backgroundColor: colors.white,
        fontSize: 32,
        color: colors.text,
    },

    modalView: {
        margin: 12,
        marginTop: 120,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        paddingTop: 45,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

      modalView: {
          margin: 12,
          marginTop: 120,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          paddingTop: 45,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },

        modalViewMenu: {
            backgroundColor: "white",
            marginTop: 150,
            padding: 12,
            paddingTop: 45,
            alignItems: "flex-start",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            width: "50%",
            height: 500,
          },
      row: {
        flexDirection: "row",
      },
      modalButton: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 12,
        elevation: 2,
        margin: 12,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      
    inputAddItem: {
        //width: "100%",
        flex: 1,
        margin: 8,
        marginBottom: 4,
        paddingHorizontal: 8,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 8,
    },
})
