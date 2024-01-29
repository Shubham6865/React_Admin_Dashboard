import './Stats.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import BarChart from '../../components/barChart/BarChart'

const Stats = () => {
    return (
        <div className="stats">
            <Sidebar />
            <div className="statsContainer">
                <Navbar />
                <div className="chartsContainer">
                    <div className="top">
                        <div className="left">
                            <BarChart />
                            1
                        </div>
                        <div className="right">2</div>
                    </div>
                    <div className="bottom">
                        <div className="left">1</div>
                        <div className="right">2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
