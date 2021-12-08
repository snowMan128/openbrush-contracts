use access_control::traits::AccessControlError;
use ink_prelude::string::String;
use pausable::traits::PausableError;
use psp22::traits::PSP22Error;

/// Enum of errors raised by our lending smart contract
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum LendingError {
    /// Custom error type for cases if writer of traits added own restrictions
    Custom(String),
    /// This error will be thrown when the lender does not have enough allowance
    /// to transfer the lending asset to the contract
    InsufficientAllowanceToLend,
    /// This error will be thrown when the lender tries to lend more amount of asset than they own
    InsufficientBalanceToLend,
    /// This error will be thrown when the borrower does not have enough allowance
    /// to transfer the collateral asset to the contract
    InsufficientAllowanceForCollateral,
    /// This error will be thrown when the borrower tries to use more amount of asset as collateral than they own
    InsufficientCollateralBalance,
    // This error will be thrown if the liquidation price of deposited collateral is calculated to be 0
    AmountNotSupported,
    // This error will be thrown if the user wants to borrow more assets than there currently are in the contract
    InsufficientAmountInContract,
    /// This error will be thrown if the user tries to lend or borrow asset which is not supported by the lending contract
    /// or if a user tries to use an usupported asset as a collateral
    AssetNotSupported,
    /// This error will be thrown if the user tries to allow an asset which is already allowed
    AssetSupported,
}

impl From<AccessControlError> for LendingError {
    fn from(access: AccessControlError) -> Self {
        match access {
            AccessControlError::MissingRole => LendingError::Custom(String::from("AC::MissingRole")),
            AccessControlError::RoleRedundant => LendingError::Custom(String::from("AC::RoleRedundant")),
            AccessControlError::InvalidCaller => LendingError::Custom(String::from("AC::InvalidCaller")),
        }
    }
}

impl From<PausableError> for LendingError {
    fn from(access: PausableError) -> Self {
        match access {
            PausableError::Paused => LendingError::Custom(String::from("Paused")),
            PausableError::NotPaused => LendingError::Custom(String::from("Not Paused")),
        }
    }
}

impl From<PSP22Error> for LendingError {
    fn from(error: PSP22Error) -> Self {
        match error {
            PSP22Error::Custom(message) => LendingError::Custom(message),
            PSP22Error::InsufficientBalance => LendingError::Custom(String::from("PSP22::InsufficientBalance")),
            PSP22Error::InsufficientAllowance => LendingError::Custom(String::from("PSP22::InsufficientAllowance")),
            PSP22Error::ZeroRecipientAddress => LendingError::Custom(String::from("PSP22::ZeroRecipientAddress")),
            PSP22Error::ZeroSenderAddress => LendingError::Custom(String::from("PSP22::ZeroSenderAddress")),
            PSP22Error::SafeTransferCheckFailed(message) => LendingError::Custom(message),
        }
    }
}