import OneSignal from "react-native-onesignal";

export const useOneSignal = (appId) => {
  function inicializar() {
    //Código de inicialização OneSignal
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId(appId);
    //Final do Código de inicialização OneSignal

    //Prompt para notificar no iOS
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log("Prompt response:", response);
    });

    //Método para lidar com notificações recebidas enquanto o aplicativo está em primeiro plano
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        console.log(
          "OneSignal: notification will show in foreground:",
          notificationReceivedEvent
        );

        let notification = notificationReceivedEvent.getNotification();
        console.log("notification: ", notification);

        const data = notification.additionalData;
        console.log("additionalData: ", data);

        // Completo com nulo significa não mostrar uma notificação.
        notificationReceivedEvent.complete(notification);
      }
    );

    // Método para lidar com notificações abertas
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log("OneSignal: notification opened:", notification);
    });
  }

  inicializar();

  return {};
};
