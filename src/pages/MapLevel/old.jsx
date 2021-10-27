import React from "react";
import { StyleSheet, Animated, View, Dimensions, Text } from "react-native";
import { createResponder } from "react-native-gesture-responder";
import api from "../../services/api";

export default class MapaLevel extends React.Component {
  constructor(props) {
    super(props);
    let posX = props.route.params.posX;
    let posY = props.route.params.posY;
    let pedido = props.route.params.pedido;
    let eventoId = props.route.params.evento;
    this.PedidoDetail = this.PedidoDetail.bind(this);
    this.state = {
      x: new Animated.Value(-(posX - Dimensions.get("window").width / 2)),
      y: new Animated.Value(-(posY - Dimensions.get("window").height / 2)),
      leftCircle: Dimensions.get("window").width / 2,
      topCircle: Dimensions.get("window").height / 2,
      catalogo: {},
      contatoEvento: {},
      loading: false,
      loadingMapa: false,
      loadingContato: false,
      mapa: {},
      maxX: "",
      minX: "",
      maxY: "",
      minY: "",
    };
    this.PedidoDetail(pedido);
    this.MapaLevel(eventoId);
    this.Responder = createResponder({
      onStartShouldSetResponder: () => true,
      onStartShouldSetResponderCapture: () => true,
      onMoveShouldSetResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onResponderMove: (evt, gestureState) => {
        this.pan(gestureState);
      },
      onPanResponderTerminationRequest: () => true,
    });
  }
  PedidoDetail(pedido) {
    const getPedido = api.get(`pedido/${pedido}`).then((result) => {
      this.setState({
        loading: true,
        catalogo: result.data._embedded.cliente,
      });
    });
  }
  MapaLevel(eventoId) {
    const getEvento = api.get(`mapalevel?evento=${eventoId}`).then((result) => {
      this.setState({
        evento: result.data._embedded.mapa_level,
        loading: true,
        loadingMapa: true,
      });

      var retornXY = result.data._embedded.mapa_level[0].image_size.split(",");
      this.setState({
        maxX: retornXY[0],
        minX: -retornXY[0],
        maxY: retornXY[1],
        minY: -retornXY[1],
      });
    });
  }
  contatoCliente(idCliente) {
    const getContatoCliente = api
      .get(`contatocliente?cliente=${idCliente}`)
      .then((result) => {
        this.setState({
          contatoCliente: result.data._embedded.contato_cliente,
        });
        this.setState({ loadingContato: true });
      });
  }
  pan = (gestureState) => {
    const { x, y } = this.state;
    const { topCircle, leftCircle } = this.state;
    const maxX = this.state.maxX;
    const minX = this.state.minX;
    const maxY = this.state.maxY;
    const minY = this.state.minY;

    const xDiff = gestureState.moveX - gestureState.previousMoveX;
    const yDiff = gestureState.moveY - gestureState.previousMoveY;
    let newX = x._value + xDiff;
    let newY = y._value + yDiff;
    if (newX < minX) {
      newX = minX;
    } else if (newX > maxX) {
      newX = maxX;
    }

    if (newY < minY) {
      newY = minY;
    } else if (newY > maxY) {
      newY = maxY;
    }
    x.setValue(newX);
    y.setValue(newY);
    this.setState({ leftCircle: newX });
    this.setState({ topCircle: newY });
  };
  render() {
    const { x, y, catalogo, loading } = this.state;
    const { topCircle, leftCircle } = this.state;
    const imageStyle = { left: x, top: y, width: 1890, height: 2927 };
    const positionCircle = { top: topCircle, left: leftCircle };
    return (
      <View style={styles.container}>
        {this.state.loadingMapa && (
          <View style={styles.containerPin}>
            <Animated.Image
              source={{
                uri: `https://paineldoexpositor.com.br/uploads/mapalevel/${this.state.evento[0].planta_baixa}`,
              }}
              resizeMode={"contain"}
              {...this.Responder}
              style={[styles.draggable, imageStyle]}
            />
          </View>
        )}
        <View style={[styles.circle, positionCircle]} />
        {loading && (
          <View style={styles.expositores}>
            <Text style={styles.textCatalogo}>{catalogo.nome}</Text>
            <Text style={styles.textCatalogo}>CNPJ: {catalogo.cnpj}</Text>
            <Text
              style={styles.textCatalogo}
            >{`${catalogo.cidade} - ${catalogo.estado}`}</Text>
            <Text style={styles.textCatalogo}>{`Fone: ${catalogo.fone1}`}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /* Seta container dragable*/
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#e8eaef",
    overflow: "hidden",
  },
  containerPin: {
    position: "relative",
    width: 1890,
    height: 2927,
  },
  pin: {
    position: "absolute",
  },
  /* Seta tamanho do container image */
  draggable: {
    width: 1890,
    height: 2927,
    position: "absolute",
  },
  location: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -25,
    marginTop: 0,
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    backgroundColor: "blue",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "rgba(195, 20, 27, 0.3)",
    position: "absolute",
    marginLeft: -50,
    marginTop: -40,
  },
  expositores: {
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    left: "1%",
    width: "98%",
    padding: 10,
    backgroundColor: "#0573b8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textCatalogo: {
    textAlign: "center",
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "Roboto",
  },
});
