
1. Click on the **SELECT GATE** tab.
2. Choose a gate from the dropdown menu and press the **SUBMIT** button.
3. Navigate to the **COMPUTE** tab in the header and click on it.
4. To initialize weight and bias values, click on the **INITIALIZE** button.
5. Proceed to select values for the input nodes, specifically X₁ and X₂. Confirm your selections by clicking the **SUBMIT** button.
6. Identify the Yin cell corresponding to the current row and click on it. Then, input the appropriate (Σ + Bias) value.
7. To apply the step function, click the **ACTIVATE** button.
8. Now, confirm the accuracy of the result by clicking the **CHECK** button to compare the expected value (T) with the actual value (Y).
9. If T does not match Y, follow these steps; otherwise, jump to step 10:
    <ol type="I">
    <li>Click the <b>UPDATE</b> button to adjust weights and bias value.</li>
    <li>Initialize the learning rate value (skip this step if already done).</li>
    <li>Enter the required values in the input boxes for W₁(new) and click the <b>SUBMIT</b> button.</li>
    <b>Note:</b> Observe the w₁(old), w₂(old), and b(old) values from the network, and the T, Y, and x values from the table.
    <li>Repeat the above step(c) for W₂(new) and b(new).</li>
    </ol>

10. Repeat steps 5 through 9 for the other (total = 2²) combinations of X₁ and X₂.
11. Repeat the step 5 to 10 if in between weight changes otherwise move to next step.
12. Proceed by clicking the **NEXT** button to execute epochs until the predicted output is obtained for each input dataset.
13. Lastly, proceed to the **ANALYZE** tab and select it. Then, plot the graph by clicking the **PLOT** button.

