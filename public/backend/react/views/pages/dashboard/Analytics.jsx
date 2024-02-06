import React, { useEffect, useState } from 'react'
import app_config from '../../../config/app.config';

function Analytics() {
    const [Analytics, setAnalytics] = useState({})
    useEffect(() => {
        axios.get(`${app_config.api_endpoint}/analytics`)
        .then(res => {
            console.log(res);
            setAnalytics(res.data);
        });

        return () => {
            setAnalytics({})
        }
    }, [])

    return (
        <div className="container-fluid p-3">
            <div className="dashboard_analytics">
                <div class="card">
                    <h2>Analytics</h2>
                    <div class="analytics">
                        <div class="analytics-item">
                            <h3>Total Visitors</h3>
                            <p>{ Analytics.website_views }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Total Blog Views</h3>
                            <p>{ Analytics.blog_views }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Total Blog Categories</h3>
                            <p>{ Analytics.blog_categories }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Total Blogs</h3>
                            <p>{ Analytics.blogs }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Photos</h3>
                            <p>{ Analytics.photos }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Videos</h3>
                            <p>{ Analytics.videos }</p>
                        </div>
                        <div class="analytics-item">
                            <h3>Total Blog Comments</h3>
                            <p>{ Analytics.blog_comments }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics