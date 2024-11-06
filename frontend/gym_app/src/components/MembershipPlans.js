import React, { useState } from 'react';

const MembershipPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Choose Your Membership Plan</h2>
            <div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        margin: '10px',
                        cursor: 'pointer',
                        backgroundColor: selectedPlan === 'Basic' ? '#f0f0f0' : '#fff',
                    }}
                    onClick={() => handleSelectPlan('Basic')}
                >
                    <h3>Basic Plan</h3>
                    <p>$10/month</p>
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        margin: '10px',
                        cursor: 'pointer',
                        backgroundColor: selectedPlan === 'Advanced' ? '#f0f0f0' : '#fff',
                    }}
                    onClick={() => handleSelectPlan('Advanced')}
                >
                    <h3>Advanced Plan</h3>
                    <p>$20/month</p>
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        margin: '10px',
                        cursor: 'pointer',
                        backgroundColor: selectedPlan === 'Premium' ? '#f0f0f0' : '#fff',
                    }}
                    onClick={() => handleSelectPlan('Premium')}
                >
                    <h3>Premium Plan</h3>
                    <p>$30/month</p>
                </div>
            </div>

            {selectedPlan && (
                <div style={{ marginTop: '20px' }}>
                    <h4>You selected: {selectedPlan} plan</h4>
                    <button onClick={() => alert('Proceeding to next steps...')}>Proceed</button>
                </div>
            )}
        </div>
    );
};

export default MembershipPlans;
