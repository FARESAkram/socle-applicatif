# Use an official Java image based on Alpine as the base image
FROM openjdk:11 AS builder

# Set the working directory
WORKDIR /app

# Copy the entire project to the container
COPY . /app

# Build the Spring Boot application
RUN ./mvnw clean package -DskipTests=true -Doracle.jdbc.timezoneAsRegion=false

# Use an official Java image based on Alpine as the base image
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the Spring Boot application
COPY --from=builder /app/target/*.jar /app/usersManagement-0.0.1-SNAPSHOT.jar

# Expose the port
EXPOSE 8080

# Run the Spring Boot application
CMD java -Duser.timezone=UTC -jar usersManagement-0.0.1-SNAPSHOT.jar

# Path: docker-compose.yml
