import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtevs4iam.css';
import '../../css/c/cgh81_bcb.css';
import '../../css/b/bo9dndb5j.css';
import '../../css/j/jeq48rbsh.css';
import '../../css/j/jq18rebpo.css';
import '../../css/g/gocwjcc2m.css';
import '../../css/x/xlo7isb0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtevs4iam"/><path class="cgh81_bcb"/><path class="bo9dndb5j"/><path class="jeq48rbsh"/><path class="jq18rebpo"/><path class="gocwjcc2m"/><path class="xlo7isb0c"/>`,
		"fallback": "energy-icons:wind-turbine-check-20-bold",
	});
}

export default Component;
