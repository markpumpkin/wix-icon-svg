import { categories, icons } from "./data";
import _ from "lodash";
import Icon from "./Icon";

const AppWapper = () => {
    return (
        <div className="app-wapper">
            {_.map(categories, (category) => (
                <div className={`category-wapper _${category.value}`}>
                    <h2>{category.label}</h2>
                    <div className="grid">
                        {_.map(icons, (icon) => {
                            if (icon.category === category.value) return <Icon icon={icon} />;
                            return null;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppWapper;
