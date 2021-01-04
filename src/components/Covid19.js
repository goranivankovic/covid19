
import React from 'react'
import { Container,Row,Col, FormGroup, FormControl,Form,Button} from 'react-bootstrap'
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';

  
  export default class Covid19 extends React.Component {
      constructor(props){
          super(props)
          this.state={
              country:'',
              jan:'',
              feb:'',
              mar:'',
              apr:'',
              maj:'',
              jun:'',
              jul:'',
              aug:'',
              sep:'',
              oct:'',
              nov:'',
              dec:'',
             
          }


     this.getData=this.getData.bind(this)
     this.sendData=this.sendData.bind(this)

      }
      getData(s){
          this.setState({
              country:s.target.value
          })

      }
    async  sendData(e){
        e.preventDefault()
        let input =document.querySelector('.input')

       

          
     try{
     
     const response= await  Axios.get(`https://api.covid19api.com/country/${this.state.country}/status/confirmed?from=2020-01-02T00:00:00Z&to=2020-12-03T00:00:00`)
      
           
           this.setState({
               jan:response.data[1].Cases,
               feb:response.data[10].Cases,
               mar:response.data[39].Cases,
               apr:response.data[70].Cases,
               maj:response.data[100].Cases,
               jun:response.data[131].Cases,
               jul:response.data[161].Cases,
               aug:response.data[192].Cases,
               sep:response.data[223].Cases,
               oct:response.data[253].Cases,
               nov:response.data[284].Cases,
               dec:response.data[314].Cases,
              
           })
         
         
          
        

           
    input.value=''
          } catch (error) {
            console.error(error);
            input.value=''
           
            this.setState({
              country:'',
              jan:'',
              feb:'',
              mar:'',
              apr:'',
              maj:'',
              jun:'',
              jul:'',
              aug:'',
              sep:'',
              oct:'',
              nov:'',
              dec:'',
           
            
            })
            window.location='/'


          }

       
      



        

      }


    render() {
        const h={
            height:'70vh'
        }
     

        const data = {
            labels: ['January 1', 'February 1', 'March 1', 'April 1', 'May 1', 'June 1','July 1','August 1','September 1','October 1','November 1','December 1'],
            datasets: [
              {
                label: 'Covid-19 App',
                data: [this.state.jan, this.state.feb, this.state.mar,this.state.apr, this.state.maj,this.state.jun,
                    this.state.jul,this.state.aug,this.state.sep,this.state.oct,this.state.nov,this.state.dec],
                fill: false,
                backgroundColor: 'indianred',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          }
          
          const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }
          const st={
            textTransform: 'capitalize'
          }
    

  



      return (
          <div className="mainDiv">
              <br></br>
              <br></br>
              <Container>
                  <Row>
                      <Col className="col-sm-6 col-12" >
                      <h3 className="text-left text-primary">Covid-19 App</h3>
                     
                     <h5 style={st} className="text-danger">{this.state.country}</h5> 
                      </Col>
                      <Col className="col-sm-6 col-12">
                      <Form onChange={this.getData}>
                          <FormGroup>
                              <FormControl type ="text" className="input" placeholder="     "></FormControl>
                             
                          </FormGroup>
                          <FormGroup>
                              <Button className="float-right" onClick={this.sendData}>Send</Button>
                          
                          </FormGroup>
                          
                          
                          </Form> 
                          </Col>
                  </Row>
              </Container>
              <Container>
                  <Row>
                      <Col className="col-sm-12 col-12"> 
                      <Bar  data={data} options={options} />
                      </Col>
                  </Row>
              </Container>
              
              
     
        </div>
      );
    }
  }
  