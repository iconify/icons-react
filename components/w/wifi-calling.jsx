import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.co6dk9beh {
  fill: currentColor;
  d: path("M18.93 20q-2.528 0-5.184-1.266t-4.944-3.555q-2.27-2.288-3.536-4.935T4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.659L9.142 7.3q.07.42-.025.733t-.333.513L6.59 10.592q.616 1.117 1.361 2.076t1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.304-.083.674-.033l2.103.43q.408.1.662.411t.254.712v2.435q0 .45-.31.75t-.76.3M16.5 9.962l-4.467-4.473q1.019-.758 2.175-1.162t2.292-.404q1.13 0 2.284.407t2.178 1.17z");
}
</style><path class="co6dk9beh"/>`,
		"fallback": "material-symbols-light:wifi-calling",
	});
}

export default Component;
