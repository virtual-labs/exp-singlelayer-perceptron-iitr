### **Introduction**

The perceptron is one of the simplest artificial neural network architectures, introduced by Frank Rosenblatt in 1957. It represents the simplest type of feedforward neural network, consisting of a single layer of input nodes that are fully connected to a layer of output nodes. The perceptron can learn linearly separable patterns and uses slightly different types of artificial neurons known as threshold logic units (TLU). The TLU was first introduced by McCulloch and Walter Pitts in the 1940s. A perceptron has a single layer of threshold logic units with each TLU connected to all inputs.

<center>  
<img style="mix-blend-mode: darken;" src="images\TLU.png" width="50%" alt="Threshold Logic Unit">
<figcaption><strong>Fig.1 Threshold Logic Unit</strong></figcaption>
</center>

### **Types of perceptron :**
* <b>Single-Layer Perceptron :</b> The single-layer perceptron (SLP) is a fundamental concept in artificial neural networks and serves as the building block for more complex models. In practical terms, the single-layer perceptron is a binary classifier that can be used to separate data points into two classes based on a linear decision boundary.
* <b>Multi-Layer Perceptron :</b> Multilayer perceptron possess enhanced processing capabilities as they consist of two or more layers, adept at handling more complex patterns and relationships within the data.

#### **Basic components of perceptron:**

* <b>Input layer :</b> The input layer is where the perceptron receives its input features. Each input is associated with a weight, reflecting its importance in the decision-making process.
* <b>Weights :</b> Each input is multiplied by its corresponding weight. These weights determine the strength of the connection between the input and the perceptron.

<center>  
<img style="mix-blend-mode: darken;" src="images\wordfig1.png" width="50%" alt="Pictorial representation of Single Layer Perceptron">
<figcaption><strong>Fig.2 Pictorial representation of Single Layer Perceptron</strong></figcaption>
</center>
</br>

* <b>Bias :</b> It is the same as the intercept added in a linear equation. It is an additional parameter which task is to modify the output along with the weighted sum of the input to the other neuron.
* <b>Summation :</b> The weighted sum of all inputs is computed. Mathematically, this is represented as:<br>
<center><b>Σ = w1 . x1 + w2 . x2 + ....+ wn . xn</b></center><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w is the feature (weight) vector,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x is an n-dimensional sample from the training dataset.<br>

* <b>Activation Function :</b> The weighted sum is then passed through an activation function. Commonly, a threshold function is used. The Formula for Step Activation Function is :<br>
<center><b>Y<sub>in</sub> = Σ + Bias<br>
f(y) = 1, if Y<sub>in</sub> >= θ

f(y) = -1, if Y<sub>in</sub> < θ</b></center>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where, θ is the threshold value.

* <b>Output :</b> The output from the activation function is the final output of the perceptron. In a single-layer perceptron, this output is the result of the classification or decision-making process.


### **Training Algorithm:**

* The training algorithm for the single-layer perceptron is based on the concept of supervised learning.
* The perceptron algorithm adjusts the weights iteratively to minimize the error between the predicted output and the actual output.
* The algorithm updates the weights using the delta rule, which involves calculating the difference between the predicted and actual outputs and adjusting the weights accordingly.
<center>  
<img style="mix-blend-mode: darken;" src="images\imgiit.png" width="50%" alt="Flow Chart of Single Layer Perceptron">
<figcaption><strong>Fig. 3 Flow Chart of Single Layer Perceptron</strong></figcaption><br>
</center>


#### **Perceptron Learning Rule:**
* The perceptron learning rule updates the weights based on the error signal.
* If the predicted output matches the target output, no weight adjustment is made.
* If the predicted output differs from the target output, the weights are adjusted to reduce the error.
* The learning rate, which determines the step size of weight updates, is an important parameter that affects the convergence and stability of the model.
* Equation for perceptron weight adjustment :
<center><b>Δw = η * d * x</b></center>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d : Predicted Output – Desired Output,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;η : Learning Rate, Usually Less than 1,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x : Input Data.


#### **Applications:**
* <b>Binary Classification :</b> SLPs find application in tasks requiring binary classification, such as spam detection, medical diagnosis, and quality control.
* <b>Logical Operations :</b> SLPs can be used to implement simple logical operations such as AND, OR, and NOT. For example, a perceptron can be trained to perform an AND operation by classifying input pairs as either belonging to the class "1" (true) or "0" (false) based on the logical AND condition.
* <b>Fault Detection in Systems :</b> SLPs can be applied to detect faults or anomalies in systems, where the goal is to classify normal and abnormal conditions based on input data.

#### **Limitations:**
* <b>Linear Separability :</b> One significant limitation is that SLPs can only learn linearly separable functions, meaning they struggle with problems that require non-linear decision boundaries.
* <b>Exclusive OR (XOR) Problem :</b> SLPs fail to solve problems like the XOR function, which demands a non-linear separation of input classes.

#### **Extensions:**
* To address limitations, multilayer perceptron have been developed, allowing for the modeling of complex relationships through the incorporation of hidden layers between input and output layers.