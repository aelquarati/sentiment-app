FROM python:3.7-alpine
WORKDIR /api
ENV FLASK_APP=flask_app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY . .
RUN pip install -r requirements.txt
ENV FLASK_APP=/api/analyzer/app.py
EXPOSE 5000
CMD ["flask", "run"]