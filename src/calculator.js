export const calculator = {
  validateInput: function (nums) {
    if (
      nums.length === 0 ||
      nums.length > 2 ||
      nums.length < 2 ||
      nums.some((num) => typeof num !== "number")
    )
      throw new Error("Error: expected just two integer arguments");
  },

  add: function (...nums) {
    this.validateInput(nums);
    return nums[0] + nums[1];
  },
  subtract: function (...nums) {
    this.validateInput(nums);
    return nums[0] - nums[1];
  },
  divide: function (...nums) {
    this.validateInput(nums);
    return nums[0] / nums[1];
  },
  multiply: function (...nums) {
    this.validateInput(nums);
    return nums[0] * nums[1];
  },
};
