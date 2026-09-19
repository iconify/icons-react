import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gh-r48b8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.399 26.444c-1.627-6.017-5.03-8.031-7.356-8.146l-6.552-.08c3.18 1.63 6.076 4.505 8.21 10.74");
}

.ljpombbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.229 30.734c5.904.361 11.03-4.774 13-9.532c1.963-4.757 2.599-5.832 6.452-8.44");
}

.xgydxum_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.509 12.464c-8.776.15-15.38-1.815-19.5 8.605c-2.845 6.806-7.122 8.052-12.79 8.052c3.037 1.578 4.88 6.473 8.346 6.473c6.596 0 10.37-18.68 23.94-23.13z");
}
</style><path class="gh-r48b8v"/><path class="xgydxum_c"/><path class="ljpombbst"/>`,
		"fallback": "arcticons:xanh-sm",
	});
}

export default Component;
