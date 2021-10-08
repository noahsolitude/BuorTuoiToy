import React, {useState} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Statistics from './Statistics';
import Tags from './Tags';

const StoreItem = ({title, imgSrc, users, time, added, tags, price}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imgWrapper}
        onPress={() => {
          setShowModal(true);
        }}>
        <Image source={imgSrc} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.title}>{title}</Text>
        <View style={{marginBottom: 14}}>
          <Statistics users={users} time={time} added={added} />
        </View>

        <Tags tags={tags} />
      </View>
      <Modal
        style={{margin: 0}}
        isVisible={showModal}
        hasBackdrop={true}
        onBackdropPress={() => setShowModal(false)}
        backdropColor={'black'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 375,
              backgroundColor: '#EFEFEF',
              width: '100%',
              paddingTop: 16,
              paddingHorizontal: 12,
            }}>
            <Text style={styles.title}>{title}</Text>
            <View style={{marginBottom: 14}}>
              <Statistics users={users} time={time} added={added} />
            </View>
            <Tags tags={tags} />
            <Text style={{marginTop: 14, marginBottom: 12}}>
              Цена: {price} руб
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 83,
              }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Демо</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Ввести промокод</Text>
              </TouchableOpacity>
            </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <TouchableOpacity style={styles.btnBig}>
                <Text style={styles.btnText}>Добавить в корзину</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  imgWrapper: {
    paddingHorizontal: 44,
    alignItems: 'center',
    marginBottom: 12,
  },
  img: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  infoBox: {
    paddingLeft: 12,
    paddingRight: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  btn: {
    width: 140,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#119C38',
    borderRadius: 12,
  },
  btnBig: {
    width: 296,
    height: 40,
    backgroundColor: '#333333',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default StoreItem;
