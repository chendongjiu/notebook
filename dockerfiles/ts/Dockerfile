FROM ubuntu:16.04

RUN apt update && \
apt install python3 -y && \
apt install python3-pip -y && \
apt install nodejs -y && \
apt install npm -y && \
apt install git -y && \
mkdir $HOME/data && \
cp /usr/bin/nodejs /usr/bin/node

ADD notebook $HOME/data/notebook

WORKDIR $HOME/data/notebook

RUN mkdir $HOME/data/workspace && \
pip3 install . && pip3 install keras && pip3 install xgboost && \
jupyter notebook --generate-config && echo "c.NotebookApp.ip='*'" >> ~/.jupyter/jupyter_notebook_config.py && \
echo 'c.NotebookApp.open_browser = False' >> ~/.jupyter/jupyter_notebook_config.py && \
echo 'c.NotebookApp.port = 8888' >> ~/.jupyter/jupyter_notebook_config.py

WORKDIR $HOME/data/workspace

CMD [ "jupyter", "notebook", "--allow-root" ]
