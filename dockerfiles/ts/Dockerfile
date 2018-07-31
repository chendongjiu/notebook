FROM ubuntu:16.04

ADD . /data

WORKDIR /data

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E084DAB9 && \
apt update && \
apt install python3 -y && \
apt install python3-pip -y && \
apt install nodejs -y && \
apt install npm -y && \
apt install git -y && \
mkdir $HOME/data && \
cp /usr/bin/nodejs /usr/bin/node

RUN apt install r-base -y

RUN apt-get install libzmq3-dev libssl-dev libcurl4-openssl-dev -y

RUN pip3 install . && \
pip3 install keras && pip3 install xgboost && \
jupyter notebook --generate-config && echo "c.NotebookApp.ip='*'" >> ~/.jupyter/jupyter_notebook_config.py && \
echo 'c.NotebookApp.open_browser = False' >> ~/.jupyter/jupyter_notebook_config.py && \
echo 'c.NotebookApp.port = 8888' >> ~/.jupyter/jupyter_notebook_config.py && \
echo "c.NotebookApp.base_project_url = '$HOME/data'" >> ~/.jupyter/jupyter_notebook_config.py

RUN Rscript installr.R

CMD [ "jupyter", "notebook", "--allow-root" ]
