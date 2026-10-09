import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtevs4iam.css';
import '../../css/c/cgh81_bcb.css';
import '../../css/r/r8c2bqbqg.css';
import '../../css/j/jeq48rbsh.css';
import '../../css/v/vv729ib_h.css';
import '../../css/a/as6kz-7sz.css';
import '../../css/b/b16ij4gjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtevs4iam"/><path class="cgh81_bcb"/><path class="r8c2bqbqg"/><path class="jeq48rbsh"/><path class="vv729ib_h"/><path class="as6kz-7sz"/><path class="b16ij4gjd"/>`,
		"fallback": "energy-icons:wind-turbine-alert-20-bold",
	});
}

export default Component;
