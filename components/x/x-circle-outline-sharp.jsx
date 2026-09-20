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
		"content": `<style>.qax5m7ibk {
  fill: currentColor;
  d: path("M8.323 16.789h1.01l2.656-4.293l2.623 4.292h1.065L12.552 11.8l2.883-4.588h-1.01l-2.411 3.934L9.62 7.211H8.56l2.895 4.595zm.171 3.51q-1.642-.701-2.867-1.926t-1.926-2.867T3 12t.701-3.506t1.926-2.857T8.494 3.71T12 3t3.506.71t2.857 1.927t1.926 2.857T21 12t-.71 3.506t-1.926 2.867t-2.858 1.926T12 21t-3.506-.701M12 20q3.325 0 5.663-2.328T20 12q0-3.325-2.337-5.663T12 4Q8.656 4 6.328 6.338T4 12q0 3.344 2.328 5.672T12 20m0-8");
}
</style><path class="qax5m7ibk"/>`,
		"fallback": "material-symbols-light:x-circle-outline-sharp",
	});
}

export default Component;
