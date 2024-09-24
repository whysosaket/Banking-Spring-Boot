FROM openjdk:17 AS BUILD_IMAGE
WORKDIR /usr/src/app/
RUN apt update && apt install maven -y
COPY ./ /usr/src/app/
RUN mvn install -DskipTests

FROM openjdk:17

WORKDIR /usr/src/app/
COPY target/*.jar app.jar

EXPOSE 9000
ENTRYPOINT ["java","-jar","app.jar"]